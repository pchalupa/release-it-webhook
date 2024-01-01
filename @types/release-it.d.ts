declare module 'release-it' {
    type SemVer = string;

    export class Plugin {
        static isEnabled(): boolean;
        static disablePlugin(): string;

        config: {
            getContext(key: string): string;
        };

        options: Record<string, unknown>;

        log: {
            verbose(message: string): void;
            warn(message: string): void;
            error(message: string): void;
            log(message: string): void;
            info(message: string): void;
        };

        init(): void;
        getInitialOptions(): Record<string, unknown>;

        // Getters
        getName(): string;
        getLatestVersion(): SemVer;
        getIncrement(info: { latestVersion: SemVer; increment: string; isPreRelease: boolean; preReleaseId: string }): string;
        // eslint-disable-next-line @typescript-eslint/naming-convention
        getIncrementedVersionCI(info: { latestVersion: SemVer; increment: string; isPreRelease: boolean; preReleaseId: string }): SemVer;
        getIncrementedVersion(info: { latestVersion: SemVer; increment: string; isPreRelease: boolean; preReleaseId: string }): SemVer;

        // Helpers
        getContext(): Record<string, unknown>;
        step(options: { enabled: boolean; task: () => void; label?: string; prompt?: string }): Promise<void>;

        // Release-cycle methods
        beforeBump(): void;
        bump(version: SemVer): void;
        beforeRelease(): void;
        release(): void;
        afterRelease(): Promise<void> | void;
    }
}
