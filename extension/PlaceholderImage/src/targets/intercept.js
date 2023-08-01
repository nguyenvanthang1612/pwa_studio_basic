function localIntercept(targets) {
  targets.of("@magento/venia-ui").routes.tap((routes) => {
    routes.push({
      name: "Placeholder Image demo page",
      pattern: "/placeholder-image-demo",
      exact: true,
      path: require.resolve(
          "PlaceholderImage/src/components/PlaceholderImageDemo/placeholderImageDemo.js"
      ),
    });
    return routes;
  });
}

module.exports = localIntercept;
