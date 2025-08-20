import React from "react";
import GetStartedLayout from "./GetStartedLayout";


import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Card, CardContent, CardTitle, CardDescription } from "./ui/card";

import "./OtpPage.scss";

const OtpPage = ({ children }: { children: React.ReactNode }) => {
    return (
        <GetStartedLayout>
            <Card className="otp-card px-3">
                <CardTitle>Verification Code </CardTitle>
                <CardDescription>A verification code has been sent to your email. Please enter the code to proceed</CardDescription>
                <CardContent className="mt-4">
                    <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
                        <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                        </InputOTPGroup>
                    </InputOTP>
                </CardContent>

            </Card>
            
        </GetStartedLayout>
      );
};

export default OtpPage;