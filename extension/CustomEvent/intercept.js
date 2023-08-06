module.exports = targets => {
    const { talons } = targets.of('@magento/peregrine');
    const { specialFeatures } = targets.of('@magento/pwa-buildpack');

    specialFeatures.tap(flags => {
        flags[targets.name] = {
            esModules: true
        };
    });

    talons.tap(({ App, Header, SearchBar }) => {
        App.useApp.wrapWith('@magento/experience-platform-connector');
        Header.useAccountMenu.wrapWith(
            '@magento/experience-platform-connector/src/wrappers/wrapUseAccountMenu'
        );
        SearchBar.useAutocomplete.wrapWith(
            '@magento/experience-platform-connector/src/wrappers/wrapUseAutocomplete'
        );
    });
};
