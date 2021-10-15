export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6168c66449798c0d05e1d4b8",
                  title: "Sanity Studio",
                  name: "bloom-gatsby-blog-studio",
                  apiId: "e422533e-5d73-4816-b6b0-d90b30d3cc2b",
                },
                {
                  buildHookId: "6168c6643254220e430aecc5",
                  title: "Blog Website",
                  name: "bloom-gatsby-blog",
                  apiId: "eced57a4-19f2-449a-806a-f45cacfbb8a2",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Amin15/bloom-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://bloom-gatsby-blog.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
