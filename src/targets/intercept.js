module.exports = (targets) => {
    const buildpackTargets = targets.of("@magento/pwa-buildpack");

    buildpackTargets.envVarDefinitions.tap((defs) => {
        defs.sections.push({
            name: "PlaceholderImage settings",
            variables: [
                {
                    name: "IMAGE_PLACEHOLDER_SERVICE_URL",
                    type: "str",
                    desc: "Service URL for image placeholders",
                },
            ],
        });
    });

    buildpackTargets.specialFeatures.tap((featuresByModule) => {
        featuresByModule["PlaceholderImage"] = {
            esModules: true,
        };
    });
};
