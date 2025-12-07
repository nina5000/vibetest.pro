import { Mail, FileDown, Play, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Guide = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-12 px-6">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
              VibeTest User Guide
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Welcome! This guide will help you get started with the system quickly.
            </p>
          </div>
        </section>

        {/* Guide Sections */}
        <section className="pb-16 px-6">
          <div className="container mx-auto max-w-4xl">
            {/* Section 1: Logging In */}
            <Card className="mb-8 border border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">1. Logging In</h3>
                </div>

                <h4 className="text-lg font-semibold text-foreground mb-3">Magic Link Authentication</h4>
                <p className="text-muted-foreground mb-4">
                  VibeTest uses secure passwordless authentication:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-6 ml-2">
                  <li>Open the VibeTest login page</li>
                  <li>Enter your email address</li>
                  <li>Click Send Magic Link</li>
                  <li>Open the email from Vibetest (check your Spam folder if needed)</li>
                  <li>Click Sign in to Vibetest in the email</li>
                  <li>Done — you're automatically logged in</li>
                </ol>

                <h4 className="text-lg font-semibold text-foreground mb-3">Initial Setup</h4>
                <p className="text-muted-foreground mb-4">
                  After your first login, create an organization or ask to be added to an existing one. Then, create a project or ask to be added to an existing one:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground ml-2">
                  <li>Click + Create New Project</li>
                  <li>Fill in the project details</li>
                  <li>Save</li>
                </ol>
              </CardContent>
            </Card>

            {/* Section 2: Working with Test Cases */}
            <Card className="mb-8 border border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileDown className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">2. Working with Test Cases</h3>
                </div>

                <p className="text-muted-foreground mb-6">
                  You have two options: import existing test cases or create new ones.
                </p>

                <h4 className="text-lg font-semibold text-foreground mb-3">Option 1: Import from Qase</h4>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-6 ml-2">
                  <li>In Qase, open your repository and click Export data</li>
                  <li>Select the test cases you need</li>
                  <li>Choose JSON format</li>
                  <li>Open VibeTest</li>
                  <li>In the repository, click + Import Test Cases</li>
                  <li>Select the downloaded file</li>
                  <li>Click Apply Import</li>
                </ol>

                <h4 className="text-lg font-semibold text-foreground mb-3">Option 2: Create a New Test Case</h4>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground ml-2">
                  <li>In the repository, click + Create Test Case</li>
                  <li>Fill in the required fields</li>
                  <li>Specify the Directory Path</li>
                  <li>Add steps using + Add Step</li>
                  <li>Click Create Test Case</li>
                </ol>
              </CardContent>
            </Card>

            {/* Section 3: Running Test Runs */}
            <Card className="mb-8 border border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Play className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">3. Running Test Runs</h3>
                </div>

                <p className="text-muted-foreground mb-6">
                  A Test Run is an execution of selected test cases with recorded results.
                </p>

                <h4 className="text-lg font-semibold text-foreground mb-3">Creating a Test Run</h4>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-6 ml-2">
                  <li>Go to the Test Runs section</li>
                  <li>Click Create new test run</li>
                  <li>Configure the parameters:
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                      <li>Title</li>
                      <li>Start date</li>
                      <li>Select test cases</li>
                    </ul>
                  </li>
                  <li>Click Create Run</li>
                </ol>

                <h4 className="text-lg font-semibold text-foreground mb-3">Executing Tests</h4>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground ml-2">
                  <li>Open the active Test Run</li>
                  <li>Assign cases to users:
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                      <li>Via the Test or Settings tab</li>
                      <li>Select cases → Bulk Actions → Assign</li>
                    </ul>
                  </li>
                  <li>Verify assignments in the Test tab</li>
                  <li>For each test:
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                      <li>Open the case details</li>
                      <li>Execute steps in order</li>
                      <li>Mark the result of each step: Pass / Fail / Blocked / Skip</li>
                      <li>Add comments if needed</li>
                    </ul>
                  </li>
                  <li>Set the final test status:
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                      <li>Passed — all steps completed successfully</li>
                      <li>Failed — defect found</li>
                      <li>Blocked — test cannot be executed</li>
                      <li>Skipped — test skipped</li>
                      <li>Retest — requires re-execution</li>
                    </ul>
                  </li>
                </ol>
              </CardContent>
            </Card>

            {/* Section 4: Support */}
            <Card className="mb-8 border border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">4. Support</h3>
                </div>

                <div className="space-y-3 text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <span className="font-semibold text-foreground">Email:</span>
                    <a href="mailto:support@vibetest.pro" className="text-primary hover:text-primary/80 transition-colors">
                      support@vibetest.pro
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Guide;
