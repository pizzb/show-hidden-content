// Initialize
print("Show Hidden Content by pizzb");
let ver = Version.build;

// Items
try {
    Vars.content.items().each(item => {
        item.hidden = false;
    });
} catch (e) {
    print(e);
};

// Blocks
try {
    if (ver >= 155.3) {
        Vars.content.blocks().each(block => {
            // translate buildVisibility.
            // All the following becomes shown:
            // hidden, coreZoneOnly, campaignOnly, legacyLaunchPadOnly, notLegacyLaunchPadOnly, lightingOnly, ammoOnly, fogOnly, shown
            // All else is limited to sandboxOnly.
            if (
                block.buildVisibility == BuildVisibility.hidden ||
                block.buildVisibility == BuildVisibility.coreZoneOnly ||
                block.buildVisibility == BuildVisibility.campaignOnly ||
                block.buildVisibility == BuildVisibility.legacyLaunchPadOnly ||
                block.buildVisibility == BuildVisibility.notLegacyLaunchPadOnly ||
                block.buildVisibility == BuildVisibility.lightingOnly ||
                block.buildVisibility == BuildVisibility.ammoOnly ||
                block.buildVisibility == BuildVisibility.fogOnly ||
                block.buildVisibility == BuildVisibility.shown
            ) {
                block.buildVisibility = BuildVisibility.shown;
            } else {
                block.buildVisibility = BuildVisibility.sandboxOnly;
            };
        });
    } else {
        Vars.content.blocks().each(block => {
            // translate buildVisibility.
            // All the following becomes shown:
            // hidden, campaignOnly, lightingOnly, ammoOnly, fogOnly, shown
            // All else is limited to sandboxOnly.
            if (
                block.buildVisibility == BuildVisibility.hidden ||
                block.buildVisibility == BuildVisibility.campaignOnly ||
                block.buildVisibility == BuildVisibility.lightingOnly ||
                block.buildVisibility == BuildVisibility.ammoOnly ||
                block.buildVisibility == BuildVisibility.fogOnly ||
                block.buildVisibility == BuildVisibility.shown
            ) {
                block.buildVisibility = BuildVisibility.shown;
            } else {
                block.buildVisibility = BuildVisibility.sandboxOnly;
            };
        });
    };
} catch (e) {
    print(e);
};

// Fluids
try {
    Vars.content.liquids().each(fluid => {
        fluid.hidden = false;
    });
} catch (e) {
    print(e);
};

// StatusEffects
try {
    Vars.content.statusEffects().each(statusEffect => {
        statusEffect.show = true;
    });
} catch (e) {
    print(e);
};

// Units
try {
    Vars.content.units().each(unit => {
        unit.hidden = false;
    });
} catch (e) {
    print(e);
};

// Planets
try {
    if (ver >= 155.3) {
        Vars.content.planets().each(planet => {
            planet.visible = true;
            planet.allowLaunchToNumbered = true;
            planet.accessible = true;
            planet.allowLegacyLaunchPads = true;
            planet.alwaysUnlocked = true;
        });
    } else {
        Vars.content.planets().each(planet => {
            planet.visible = true;
            planet.allowLaunchToNumbered = true;
            planet.accessible = true;
            planet.alwaysUnlocked = true;
        });
    };
} catch (e) {
    print(e);
};

// Wow, it's done!
print("Done!");