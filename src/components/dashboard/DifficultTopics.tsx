import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle } from "lucide-react";

const difficultTopics = [
  { topic: "Ponteiros em C", errorRate: 68, language: "C" },
  { topic: "Recursão em Java", errorRate: 59, language: "Java" },
  { topic: "Manipulação de Listas em Python", errorRate: 52, language: "Python" },
  { topic: "Structs em C", errorRate: 47, language: "C" },
  { topic: "Orientação a Objetos em Java", errorRate: 43, language: "Java" },
];

export function DifficultTopics() {
  const getLanguageColor = (language: string) => {
    switch (language) {
      case "Python": return "text-blue-600";
      case "Java": return "text-orange-600";
      case "C": return "text-green-600";
      default: return "text-gray-600";
    }
  };

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-warning" />
          Conteúdos com Maior Taxa de Erro
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {difficultTopics.map((topic, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-medium">{topic.topic}</span>
                  <span className={`ml-2 text-sm ${getLanguageColor(topic.language)}`}>
                    ({topic.language})
                  </span>
                </div>
                <span className="text-sm font-medium text-destructive">
                  {topic.errorRate}% erro
                </span>
              </div>
              <Progress 
                value={topic.errorRate} 
                className="h-2"
                // Use a custom red color for error rate
                style={{ 
                  '--progress-background': 'hsl(var(--destructive-light))',
                  '--progress-foreground': 'hsl(var(--destructive))'
                } as any}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}