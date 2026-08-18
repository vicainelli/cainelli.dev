/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly SPOTIFY_CLIENT_ID?: string;
	readonly SPOTIFY_CLIENT_SECRET?: string;
	readonly SPOTIFY_REFRESH_TOKEN?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

interface Window {
	posthog?: {
		capture: (event: string, properties?: Record<string, unknown>) => void;
		getFeatureFlagResult: (key: string) => { enabled: boolean } | undefined;
		onFeatureFlags: (
			callback: (
				flags: string[],
				flagVariants: Record<string, string | boolean>,
				context: { errorsLoading?: boolean },
			) => void,
		) => () => void;
	};
}
