interface IProjectService {
	createProject(projectName: string, projectId: string): IFuture<void>;
	createPlatformSpecificProject(platform: string): IFuture<void>;
	prepareProject(normalizedPlatformName: string, platforms: string[]): IFuture<void>;
	buildProject(platform: string): IFuture<void>;
	ensureProject(): void;
}

interface IPlatformProjectService {
	createProject(): IFuture<void>;
	buildProject(): IFuture<void>;
}

interface IProjectData {
	projectDir: string;
	platformsDir: string;
	projectFilePath: string;
	projectId?: string;
	projectName?: string;
}

interface IProjectTemplatesService {
	defaultTemplatePath: IFuture<string>;
	installAndroidFramework(whereToInstall: string): IFuture<string>
}