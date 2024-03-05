import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';


import { FormDatePicker } from './FormDatePicker';
import { FormInput } from './FormInput';
import { FormRadioButton } from './FormRadioButton';

interface FormAccordion {
  dataFields: Record<string, DataFielsValues>;
  control: any;
  value: string;
  title: string;
  setMaritalStatus?: React.Dispatch<React.SetStateAction<string>>;
  maritalStatus?: string;
}

interface DataFielsValues {
  label: string;
  placeholder: string
}

export const FormAccordion = ({ dataFields, control, value, title, setMaritalStatus, maritalStatus }: FormAccordion) => {

  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="hover:bg-slate-50 rounded-sm h-5 px-1 py-5 my-4 hover:no-underline font-semibold  text-violet-800">
        {title}
      </AccordionTrigger>
      <AccordionContent className="mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4">
          {Object.entries(dataFields).map(([key, { label, placeholder }]) => (

            key === 'estadoCivil' ? (
              <FormRadioButton key={key}
                control={control}
                name={key}
                label={label}
                setRadioButtonValue={setMaritalStatus!}
                RadioButtonValue={maritalStatus!}
              />
            ) : key === 'dataCompra' || key === 'dataNascimento' ? (
              <FormDatePicker key={key}
                control={control}
                name={key}
                label={label}
                placeholder={placeholder}
              />
            ) : (
              <FormInput key={key}
                control={control}
                name={key}
                label={label}
                placeholder={placeholder}
              />

            )

          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}

