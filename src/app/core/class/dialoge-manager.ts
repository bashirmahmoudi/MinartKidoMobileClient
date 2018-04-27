export class DialogeManager {
    public alert(message: string, options?: { title?: string; buttonName?: string }): Promise<void> {
        if (!navigator.notification) {
            return Promise.reject('There is a problem with alert');
        }
        return new Promise<void>((resolve, reject) => {
            navigator.notification.alert(message, resolve, options ? options.title : null, options ? options.buttonName : null);
        });
    }

    public Confirm(message: string, option?: { title?: string; buttons?: string[]; dismiss?: string; }): Promise<string> {
        const _isDefult: boolean = option && (option.buttons || option.dismiss) ? false : true;
        const buttons = option ?
            (option.buttons ? option.buttons.concat(option.dismiss ? [option.dismiss] : []) : ['OK', option.dismiss])
            : ['OK', 'Cancel'];
        const dismissIdx = buttons.length - 1;

        return new Promise<string>((resolve, reject) => {
            navigator.notification.confirm(message, (buttonIndex) => {
                if (buttonIndex === dismissIdx) {
                    reject(buttons[dismissIdx]);
                    return;
                }

                resolve(buttons[buttonIndex]);
            }, option && option.title ? option.title : null, buttons);
        });
    }

    public Prompt(message: string, defaultText?: string,
        option?: {
            title?: string;
            buttons?: string[];
            dismiss?: string;
            defaultText?: string
        }): Promise<{ button: string; prompt: string }> {
        const _isDefult: boolean = option && (option.buttons || option.dismiss) ? false : true;
        const buttons = option ?
            (option.buttons ? option.buttons.concat(option.dismiss ? [option.dismiss] : []) : ['OK', option.dismiss])
            : ['OK', 'Cancel'];
        const dismissIdx = buttons.length - 1;

        return new Promise<{ button: string; prompt: string }>((resolve, reject) => {
            navigator.notification.prompt(message, (result) => {
                if (result.buttonIndex === dismissIdx) {
                    reject({ button: buttons[dismissIdx], prompt: result.input1 });
                    return;
                }
                resolve({ button: buttons[result.buttonIndex], prompt: result.input1 });
            }, option && option.title ? option.title : null, buttons, option && option.defaultText ? option.defaultText : null);
        });
    }
}
