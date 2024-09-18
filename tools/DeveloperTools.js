import { CodeEditor } from 'code-editor';
import { DebuggingTools } from 'debugging-tools';
import { VersionControl } from 'version-control';
import { CollaborationPlatform } from 'collaboration-platform';
import { AIAssistedCoding } from 'ai-assisted-coding';
import { AutomatedTesting } from 'automated-testing';

class DeveloperTools {
    constructor() {
        this.codeEditor = new CodeEditor();
        this.debuggingTools = new DebuggingTools();
        this.versionControl = new VersionControl();
        this.collaborationPlatform = new CollaborationPlatform();
        this.aiAssistedCoding = new AIAssistedCoding();
        this.automatedTesting = new AutomatedTesting();
    }

    async createNewProject(projectName) {
        await this.codeEditor.createNewFile(projectName);
        await this.versionControl.initRepository(projectName);
    }

    async writeCode(code) {
        await this.codeEditor.writeCode(code);
        await this.aiAssistedCoding.suggestImprovements(code);
    }

    async debugCode(code) {
        await this.debuggingTools.debugCode(code);
    }

    async collaborateWithOthers(projectName) {
        await this.collaborationPlatform.createCollaborationRoom(projectName);
    }

    async runAutomatedTests(code) {
        await this.automatedTesting.runTests(code);
    }
}

export default DeveloperTools;
