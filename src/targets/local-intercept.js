module.exports = (targets) => {
    targets.of("@magento/venia-ui").routes.tap((routes) => {
        routes.push({
            name: "MyGreetingRoute",
            pattern: "/greeting/:who?",
            path: require.resolve("../components/GreetingPage/greetingPage.js"),
        });
        routes.push({
            name: "Placeholder Image demo page",
            pattern: "/placeholder-image-demo",
            exact: true,
            path: require.resolve(
                "../components/PlaceholderImageDemo/placeholderImageDemo.js"
            ),
        });
        return routes;
    });
};
// function localIntercept(targets) {
//     targets.of("@magento/venia-ui").routes.tap((routes) => {
//         routes.push({
//             name: "Placeholder Image demo page",
//             pattern: "/placeholder-image-demo",
//             exact: true,
//             path: require.resolve(
//                 "./src/components/PlaceholderImageDemo/placeholderImageDemo.js"
//             ),
//         });
//         return routes;
//     });
// }
//
// module.exports = localIntercept;
