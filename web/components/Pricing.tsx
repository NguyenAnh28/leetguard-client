"use client";

import type React from "react";
import { Check, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-white mb-6">
          Simple. Free. Effective.
        </h2>
        <p className="text-xl text-neutral-300 dark:text-neutral-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          LeetGuard is 100% free — no signups, no paywalls, just better focus.
        </p>

        <div className="flex items-center justify-center">
          <Card className="w-full max-w-lg border-2 border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-200 hover:shadow-lg">
            <CardHeader className="space-y-1 text-center relative p-12">
              <Badge
                variant="outline"
                className="absolute right-4 top-4 bg-[#FFA116]/20 text-[#FFA116] border-[#FFA116]/30"
              >
                Popular
              </Badge>
              <CardTitle className="text-2xl text-white">Free Plan</CardTitle>
              <CardDescription className="text-neutral-300">
                Perfect for focused coding sessions
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center p-12 pt-0">
              <div className="mb-8">
                <div className="text-6xl font-bold text-[#FFA116] mb-2">$0</div>
                <div className="text-neutral-300 dark:text-neutral-300 text-lg">
                  Forever free
                </div>
              </div>

              <div className="text-left space-y-4 mb-10">
                <FeatureItem>
                  <Check className="h-4 w-4 text-[#FFA116]" />
                  <span className="ml-3 text-white dark:text-white">
                    Unlimited problem tracking
                  </span>
                </FeatureItem>
                <FeatureItem>
                  <Check className="h-4 w-4 text-[#FFA116]" />
                  <span className="ml-3 text-white dark:text-white">
                    Custom site blocking
                  </span>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <HelpCircle className="h-3.5 w-3.5 ml-1 text-neutral-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="w-[200px] text-xs">
                          Block distracting websites during coding sessions
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </FeatureItem>
                <FeatureItem>
                  <Check className="h-4 w-4 text-[#FFA116]" />
                  <span className="ml-3 text-white dark:text-white">
                    Real-time sync
                  </span>
                </FeatureItem>
                <FeatureItem>
                  <Check className="h-4 w-4 text-[#FFA116]" />
                  <span className="ml-3 text-white dark:text-white">
                    No data collection
                  </span>
                </FeatureItem>
              </div>

              <Button className="w-full bg-[#FFA116] text-black px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200">
                Get Started for Free
              </Button>
            </CardContent>
            <CardFooter className="text-xs text-center text-neutral-400 p-12 pt-0">
              No credit card required. Start coding better today.
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center text-sm">{children}</div>;
}
