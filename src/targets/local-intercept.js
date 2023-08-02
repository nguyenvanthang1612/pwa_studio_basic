// module.exports = (targets) => {
//     const buildpackTargets = targets.of("@magento/pwa-buildpack");
//
//     buildpackTargets.envVarDefinitions.tap((defs) => {
//         defs.sections.push({
//             name: "PlaceholderImage settings",
//             variables: [
//                 {
//                     name: "IMAGE_PLACEHOLDER_SERVICE_URL",
//                     type: "str",
//                     desc: "Service URL for image placeholders",
//                 },
//             ],
//         });
//     });
//
//     buildpackTargets.specialFeatures.tap((featuresByModule) => {
//         featuresByModule["PlaceholderImage"] = {
//             esModules: true,
//         };
//     });
// };
//
// import './my-static-assets/icons/my-storefront_144.jpg'
function localIntercept(targets) {
    targets.of('@magento/pwa-buildpack').transformUpward.tap(def => {
        def.staticFromRoot.inline.body.file.template.inline =
            './my-static-assets/icons/my-storefront_144.jpg';
    });
}

module.exports = localIntercept;
