export interface ISettingsLoader {
    LoadSettings(context?: string): Promise<{[key: string]: string }>;
}
