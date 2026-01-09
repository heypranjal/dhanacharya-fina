import { motion, useInView } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { Calculator as CalculatorIcon, TrendingUp, Wallet, PiggyBank } from "lucide-react";
import Header from "@/components/Header";
import WhatsAppCommunity from "@/components/WhatsAppCommunity";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

// Format number to Indian currency format
const formatCurrency = (num: number): string => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(num);
};

// Format number with commas (Indian format)
const formatNumber = (num: number): string => {
  return new Intl.NumberFormat("en-IN").format(num);
};

const Calculator = () => {
  const heroRef = useRef(null);
  const calculatorRef = useRef(null);
  const heroInView = useInView(heroRef, { once: false, margin: "-100px" });
  const calculatorInView = useInView(calculatorRef, { once: false, margin: "-100px" });

  // State for SIP Calculator inputs
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [investmentDuration, setInvestmentDuration] = useState(10);

  // SIP Calculation using the formula: FV = P × [ ( (1 + r)^n − 1 ) / r ] × (1 + r)
  const sipResults = useMemo(() => {
    const P = monthlyInvestment;
    const annualRate = expectedReturn / 100;
    const r = annualRate / 12; // Monthly interest rate
    const n = investmentDuration * 12; // Total months

    // Handle edge case when r is 0
    if (r === 0) {
      const totalInvested = P * n;
      return {
        totalInvested,
        estimatedReturns: 0,
        maturityValue: totalInvested,
      };
    }

    // FV = P × [ ( (1 + r)^n − 1 ) / r ] × (1 + r)
    const futureValue = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    const totalInvested = P * n;
    const estimatedReturns = futureValue - totalInvested;

    return {
      totalInvested: Math.round(totalInvested),
      estimatedReturns: Math.round(estimatedReturns),
      maturityValue: Math.round(futureValue),
    };
  }, [monthlyInvestment, expectedReturn, investmentDuration]);

  // Pie chart data
  const pieChartData = [
    { name: "Invested Amount", value: sipResults.totalInvested, color: "#1e3a5f" },
    { name: "Est. Returns", value: sipResults.estimatedReturns, color: "#d4af37" },
  ];

  // Handle slider changes
  const handleMonthlyInvestmentChange = (value: number[]) => {
    setMonthlyInvestment(value[0]);
  };

  const handleExpectedReturnChange = (value: number[]) => {
    setExpectedReturn(value[0]);
  };

  const handleInvestmentDurationChange = (value: number[]) => {
    setInvestmentDuration(value[0]);
  };

  // Handle input changes with validation
  const handleMonthlyInvestmentInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value.replace(/,/g, "")) || 500;
    setMonthlyInvestment(Math.min(Math.max(value, 500), 100000));
  };

  const handleExpectedReturnInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 1;
    setExpectedReturn(Math.min(Math.max(value, 1), 30));
  };

  const handleInvestmentDurationInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 1;
    setInvestmentDuration(Math.min(Math.max(value, 1), 40));
  };

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-16 sm:pb-20 bg-secondary relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-foreground mb-6"
            >
              SIP <span className="text-primary">Calculator</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-secondary-foreground/70"
            >
              Plan your investments wisely. Calculate potential returns on your Systematic Investment Plan.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <section ref={calculatorRef} className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Input Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={calculatorInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Card className="shadow-lg border-primary/10">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl font-heading">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <CalculatorIcon className="w-5 h-5 text-primary" />
                    </div>
                    Investment Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Monthly Investment */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label className="text-base font-medium">Monthly Investment</Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">₹</span>
                        <Input
                          type="text"
                          value={formatNumber(monthlyInvestment)}
                          onChange={handleMonthlyInvestmentInput}
                          className="w-32 pl-7 text-right font-semibold"
                        />
                      </div>
                    </div>
                    <Slider
                      value={[monthlyInvestment]}
                      onValueChange={handleMonthlyInvestmentChange}
                      min={500}
                      max={100000}
                      step={500}
                      className="cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>₹500</span>
                      <span>₹1,00,000</span>
                    </div>
                  </div>

                  {/* Expected Annual Return */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label className="text-base font-medium">Expected Return (p.a.)</Label>
                      <div className="relative">
                        <Input
                          type="number"
                          value={expectedReturn}
                          onChange={handleExpectedReturnInput}
                          min={1}
                          max={30}
                          step={0.1}
                          className="w-24 text-right font-semibold pr-8"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">%</span>
                      </div>
                    </div>
                    <Slider
                      value={[expectedReturn]}
                      onValueChange={handleExpectedReturnChange}
                      min={1}
                      max={30}
                      step={0.1}
                      className="cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>1%</span>
                      <span>30%</span>
                    </div>
                  </div>

                  {/* Investment Duration */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label className="text-base font-medium">Time Period</Label>
                      <div className="relative">
                        <Input
                          type="number"
                          value={investmentDuration}
                          onChange={handleInvestmentDurationInput}
                          min={1}
                          max={40}
                          step={1}
                          className="w-24 text-right font-semibold pr-10"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">Yr</span>
                      </div>
                    </div>
                    <Slider
                      value={[investmentDuration]}
                      onValueChange={handleInvestmentDurationChange}
                      min={1}
                      max={40}
                      step={1}
                      className="cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>1 Yr</span>
                      <span>40 Yr</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Results Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={calculatorInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Chart Card */}
              <Card className="shadow-lg border-primary/10">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl font-heading">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    Investment Growth
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 sm:h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={pieChartData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={90}
                          paddingAngle={2}
                          dataKey="value"
                          animationBegin={0}
                          animationDuration={800}
                        >
                          {pieChartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip
                          formatter={(value: number) => formatCurrency(value)}
                          contentStyle={{
                            backgroundColor: "hsl(var(--card))",
                            borderColor: "hsl(var(--border))",
                            borderRadius: "8px",
                          }}
                        />
                        <Legend
                          verticalAlign="bottom"
                          height={36}
                          formatter={(value) => (
                            <span className="text-sm text-foreground">{value}</span>
                          )}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Results Summary */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={calculatorInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Card className="text-center p-4 sm:p-5 border-primary/10 hover:border-primary/30 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center mx-auto mb-3">
                      <Wallet className="w-5 h-5 text-navy" />
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-1">Invested Amount</p>
                    <p className="text-lg sm:text-xl font-bold text-navy">
                      {formatCurrency(sipResults.totalInvested)}
                    </p>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={calculatorInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Card className="text-center p-4 sm:p-5 border-primary/10 hover:border-primary/30 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-1">Est. Returns</p>
                    <p className="text-lg sm:text-xl font-bold text-primary">
                      {formatCurrency(sipResults.estimatedReturns)}
                    </p>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={calculatorInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Card className="text-center p-4 sm:p-5 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/40 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-3">
                      <PiggyBank className="w-5 h-5 text-green-600" />
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-1">Total Value</p>
                    <p className="text-lg sm:text-xl font-bold text-green-600">
                      {formatCurrency(sipResults.maturityValue)}
                    </p>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={calculatorInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-4xl mx-auto mt-12 sm:mt-16"
          >
            <Card className="border-primary/10 bg-secondary/30">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl font-heading font-semibold mb-4 text-foreground">
                  What is SIP?
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  A Systematic Investment Plan (SIP) is an investment strategy that allows you to invest
                  a fixed amount regularly in mutual funds. It helps in building wealth over time through
                  the power of compounding and rupee cost averaging.
                </p>
                <h4 className="text-lg font-heading font-semibold mb-3 text-foreground">
                  Benefits of SIP
                </h4>
                <ul className="grid sm:grid-cols-2 gap-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Disciplined & regular investing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Power of compounding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Rupee cost averaging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Flexibility to increase/decrease amount</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>No need to time the market</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Start with as low as ₹500</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Disclaimer */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={calculatorInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center text-xs sm:text-sm text-muted-foreground mt-8 max-w-2xl mx-auto"
          >
            <strong>Disclaimer:</strong> The calculations are based on projected annual returns.
            Actual returns may vary based on market conditions. Mutual fund investments are subject
            to market risks. Please read all scheme related documents carefully before investing.
          </motion.p>
        </div>
      </section>

      <WhatsAppCommunity />
      <Footer />
    </main>
  );
};

export default Calculator;
