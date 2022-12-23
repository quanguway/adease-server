export default ({ env }) => ({
	"vercel-deploy": {
		config: {
			deployHook:
				"https://api.vercel.com/v1/integrations/deploy/prj_003db1StIF3F7OCnV6Wj7tzj5jaK/HTmFv7e98C",
			apiToken: "eyyhoFE9BUI9gw2jy5DpchEy",
			appFilter: "adease-server",
			roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
		},
		enabled: true,
	},
});
