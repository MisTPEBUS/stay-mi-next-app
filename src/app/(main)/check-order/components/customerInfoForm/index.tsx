"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { User, Loader2, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { FormRender } from "@/components/FormRender";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

import { CustomerInfoFormProps } from "../../types";

import { contactFields, orderFields } from "./CustomerInfoFields";
import { OrderContactSchema, OrderContactSchemaType } from "./schemas";

export const CustomerInfoForm: React.FC<CustomerInfoFormProps> = ({ handleFormSubmit, isSaving }) => {
  const methods = useForm<OrderContactSchemaType>({
    resolver: zodResolver(OrderContactSchema),
    defaultValues: {
      customerFirstName: "",
      customerLastName: "",
      customerEmail: "",
      customerPhone: "",
      contactFirstName: "",
      contactLastName: "",
      contactEmail: "",
      contactPhone: "",
      notes: "",
    },
  });

  const [sameAsCustomer, setSameAsCustomer] = useState(false);
  const { setValue, watch, handleSubmit } = methods;

  const customerFirstName = watch("customerFirstName");
  const customerLastName = watch("customerLastName");
  const customerEmail = watch("customerEmail");
  const customerPhone = watch("customerPhone");

  useEffect(() => {
    if (sameAsCustomer) {
      setValue("contactFirstName", customerFirstName || "");
      setValue("contactLastName", customerLastName || "");
      setValue("contactEmail", customerEmail || "");
      setValue("contactPhone", customerPhone || "");
    } else {
      setValue("contactFirstName", "");
      setValue("contactLastName", "");
      setValue("contactEmail", "");
      setValue("contactPhone", "");
    }
  }, [sameAsCustomer, customerFirstName, customerLastName, customerEmail, customerPhone, setValue]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="col-span-1 lg:col-span-2"
    >
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" /> 訂購人資訊
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="font-semibold">訂購人資料</h3>
              <FormRender<OrderContactSchemaType> fields={orderFields} />

              <Separator className="my-6" />
              <div className="flex space-x-2">
                <h3 className="font-semibold">聯絡人資料</h3>
                <div className="flex cursor-pointer items-center space-x-2">
                  <Checkbox
                    id="sameAsCustomer"
                    checked={sameAsCustomer}
                    onCheckedChange={(checked) => setSameAsCustomer(checked === true)}
                    className="cursor-pointer"
                  />
                  <label htmlFor="sameAsCustomer" className="cursor-pointer leading-none font-medium">
                    同訂購人資料
                  </label>
                </div>
              </div>

              <FormRender<OrderContactSchemaType> fields={contactFields} />

              <div className="flex justify-center pt-4">
                <Button type="submit" disabled={isSaving} className="flex items-center gap-2 px-8" size="lg">
                  {isSaving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                  {isSaving ? "送出中..." : "訂單送出"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </form>
      </FormProvider>
    </motion.div>
  );
};
