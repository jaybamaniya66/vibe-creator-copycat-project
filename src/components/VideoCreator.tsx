import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  Download, 
  Share2, 
  Wand2, 
  User, 
  Settings,
  Sparkles,
  Clock
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const avatars = [
  { id: 1, name: "Sarah", type: "Professional", image: "👩‍💼" },
  { id: 2, name: "Mike", type: "Casual", image: "👨‍💻" },
  { id: 3, name: "Emma", type: "Creative", image: "👩‍🎨" },
  { id: 4, name: "David", type: "Business", image: "👨‍💼" },
  { id: 5, name: "Luna", type: "Friendly", image: "👩‍🦰" },
  { id: 6, name: "Alex", type: "Tech", image: "👨‍🔬" }
];

const scriptTemplates = [
  "Hey there! Are you tired of [problem]? Our [product] helps you [solution] in just [time]. Try it today!",
  "I used to struggle with [challenge] until I discovered [product]. Now I can [benefit]. You should try it too!",
  "This [product] changed my life! Before: [before state]. After: [after state]. Get yours now!",
];

export const VideoCreator = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0]);
  const [script, setScript] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [videoGenerated, setVideoGenerated] = useState(false);
  const { toast } = useToast();

  const generateScript = () => {
    const randomTemplate = scriptTemplates[Math.floor(Math.random() * scriptTemplates.length)];
    setScript(randomTemplate);
    toast({
      title: "Script Generated!",
      description: "AI has created a conversion-optimized script for you.",
    });
  };

  const generateVideo = async () => {
    if (!script.trim()) {
      toast({
        title: "Script Required",
        description: "Please write or generate a script first.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate video generation
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsGenerating(false);
    setVideoGenerated(true);
    
    toast({
      title: "Video Generated!",
      description: "Your AI UGC video is ready to download and share.",
    });
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Create Your First AI Video
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the power of AI video generation right now
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Creator Panel */}
          <div className="space-y-6">
            {/* Step 1: Script */}
            <Card className="border-0 shadow-card bg-gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    1
                  </div>
                  Write Your Script
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Enter your video script here or generate one with AI..."
                  value={script}
                  onChange={(e) => setScript(e.target.value)}
                  className="min-h-[120px] resize-none"
                />
                <Button onClick={generateScript} variant="outline" className="w-full">
                  <Wand2 className="w-4 h-4" />
                  Generate AI Script
                </Button>
              </CardContent>
            </Card>

            {/* Step 2: Avatar Selection */}
            <Card className="border-0 shadow-card bg-gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    2
                  </div>
                  Pick an Avatar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-3">
                  {avatars.map((avatar) => (
                    <div
                      key={avatar.id}
                      onClick={() => setSelectedAvatar(avatar)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-card ${
                        selectedAvatar.id === avatar.id
                          ? 'border-primary bg-primary/5 shadow-brand'
                          : 'border-border bg-background'
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-3xl mb-2">{avatar.image}</div>
                        <div className="text-sm font-medium">{avatar.name}</div>
                        <Badge variant="secondary" className="text-xs">
                          {avatar.type}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Step 3: Generate */}
            <Card className="border-0 shadow-card bg-gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    3
                  </div>
                  Generate Video
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={generateVideo}
                  disabled={isGenerating}
                  variant="hero"
                  size="lg"
                  className="w-full"
                >
                  {isGenerating ? (
                    <>
                      <Clock className="w-5 h-5 animate-spin" />
                      Generating... (30s)
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      Generate AI Video
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Preview Panel */}
          <div className="space-y-6">
            <Card className="border-0 shadow-card bg-gradient-card">
              <CardHeader>
                <CardTitle>Video Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center relative overflow-hidden">
                  {videoGenerated ? (
                    <div className="text-center p-8">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Play className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Video Generated!</h3>
                      <p className="text-muted-foreground mb-4">
                        Your AI UGC video featuring {selectedAvatar.name} is ready
                      </p>
                      <div className="flex gap-2 justify-center">
                        <Button variant="hero">
                          <Play className="w-4 h-4" />
                          Play
                        </Button>
                        <Button variant="outline">
                          <Download className="w-4 h-4" />
                          Download
                        </Button>
                        <Button variant="outline">
                          <Share2 className="w-4 h-4" />
                          Share
                        </Button>
                      </div>
                    </div>
                  ) : isGenerating ? (
                    <div className="text-center p-8">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                        <Sparkles className="w-8 h-8 text-primary-foreground animate-spin" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Generating Your Video...</h3>
                      <p className="text-muted-foreground">
                        AI is creating your video with {selectedAvatar.name}
                      </p>
                    </div>
                  ) : (
                    <div className="text-center p-8">
                      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                        <User className="w-8 h-8 text-muted-foreground" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Preview</h3>
                      <p className="text-muted-foreground">
                        Selected avatar: {selectedAvatar.name} ({selectedAvatar.type})
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Settings Panel */}
            <Card className="border-0 shadow-card bg-gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Video Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Quality</label>
                    <Badge variant="secondary">1080p HD</Badge>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Duration</label>
                    <Badge variant="secondary">30-60s</Badge>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Language</label>
                    <Badge variant="secondary">English</Badge>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Voice</label>
                    <Badge variant="secondary">Natural</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};