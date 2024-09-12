import CollabForm from '@/components/collab/collab-form';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { env } from '@/env';

async function checkCollabPassword(password: string): Promise<boolean> {
  'use server'
  return password === env.COLLAB_FORM_PASSWORD;
}

export default function CollabPage() {
  return (
    <div className="container mx-auto max-w-md mt-10">
      <Card>
        <CardHeader>
          <CardTitle>Collaboration Portal</CardTitle>
          <CardDescription>Enter password or get started</CardDescription>
        </CardHeader>
        <CardContent>
          <CollabForm checkCollabPassword={checkCollabPassword} />
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-2">
          <p> Don&apos;t know the password? Request it below</p>
          <Button variant="outline" className="w-full" asChild>
            <a href="/collab/get-started">Get Started</a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
