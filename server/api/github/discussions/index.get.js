import { createOctokit } from "#server/utils/octokit";

export default cachedEventHandler(
	async event => {
		const octokit = createOctokit(event);
		const response = await octokit.request("GET /repos/{owner}/{repo}/discussions", {
			owner: "MCWXT",
			repo: "Blog"
		});
		if (response.status !== 200) {
			throw createError({
				statusCode: response.status,
				statusMessage: "GitHub request failed"
			});
		}

		const data = [...response.data].reverse();
		const match = data.filter(i => i.category?.slug === "pin");
		const rest = data.filter(i => i.category?.slug !== "pin");

		return [...match, ...rest];
	},
	{
		name: "github-discussions-list",
		maxAge: 1
	}
);
