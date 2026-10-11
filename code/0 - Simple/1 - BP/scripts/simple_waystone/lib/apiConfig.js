const configCache = new Map();
export const apiConfig = new class apiConfig {
    constructor() {
        this.defaultConfig = {
            organize: false,
            organizeDimension: 0,
            showDimension: 0,
            publicFirst: false
        };
    }
    getConfig(player, config) {
        const cache = configCache.get(player.id);
        if (cache) {
            if (config != undefined)
                return cache[config];
            return cache;
        }
        const dynamic = player.getDynamicProperty("config");
        if (!dynamic || typeof dynamic != "string") {
            if (config != undefined)
                return this.defaultConfig[config];
            return this.defaultConfig;
        }
        const allConfig = JSON.parse(dynamic);
        if (!this.isConfig(allConfig)) {
            player.setDynamicProperty(`config`, JSON.stringify(this.defaultConfig));
            if (config != undefined)
                return this.defaultConfig[config];
            return this.defaultConfig;
        }
        if (config != undefined)
            return allConfig[config];
        return allConfig;
    }
    setConfig(player, config) {
        player.setDynamicProperty("config", JSON.stringify(config));
        configCache.set(player.id, config);
    }
    isConfig(obj) {
        return obj &&
            typeof obj === "object" &&
            typeof obj.organize === "boolean" &&
            typeof obj.organizeDimension === "number" &&
            typeof obj.showDimension === "number" &&
            typeof obj.publicFirst === "boolean";
    }
};
