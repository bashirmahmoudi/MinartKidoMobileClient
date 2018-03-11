class Parent {
    public _farmoon: string;

    public set Farmoon(s: string) {
        if (s === "s") {
            this._farmoon = "farmoon: " + s;
        }
    }

    public get Farmoon(): string {
        return this._farmoon + " haminjoori";
    }

    public setFarmoon(s: string) {
        if (s === "s") {
            this._farmoon = "farmoon: " + s;
        }
    }

    public getFarmoon(): string {
        return this._farmoon + " haminjoori";
    }

}


class Test {
    public charkhoondanFarmoon(p: Parent) {
        p._farmoon = "s";
        p.Farmoon = "s";
        p.setFarmoon("s");
    }
}