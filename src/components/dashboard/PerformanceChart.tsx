import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const chartData = [
  { week: "Sem 1", acertos: 65 },
  { week: "Sem 2", acertos: 68 },
  { week: "Sem 3", acertos: 72 },
  { week: "Sem 4", acertos: 70 },
  { week: "Sem 5", acertos: 75 },
  { week: "Sem 6", acertos: 78 },
  { week: "Sem 7", acertos: 81 },
];

export function PerformanceChart() {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Evolução da Turma - Acertos por Semana</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="week" 
                className="text-sm"
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                domain={[50, 100]}
                className="text-sm"
                tick={{ fontSize: 12 }}
                label={{ value: '% Acertos', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="acertos" 
                stroke="hsl(var(--primary))" 
                strokeWidth={3}
                dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: 'hsl(var(--primary))', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}