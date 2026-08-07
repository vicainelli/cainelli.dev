/// <reference types="astro/client" />

interface Window {
	posthog?: {
		capture: (event: string, properties?: Record<string, unknown>) => void;
	};
}
