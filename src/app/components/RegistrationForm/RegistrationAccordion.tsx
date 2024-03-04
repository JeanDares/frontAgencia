import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';


import { RegistrationDatePicker } from './RegistrationDatePicker';
import { RegistrationInput } from './RegistrationInput';
import { RegistrationRadioButton } from './RegistrationRadioButton';

interface RegistrationAccordion {
  dataFields: any;
  control: any;
  value: string;
  title: string;
  setCheckboxValue: React.Dispatch<React.SetStateAction<string>>;
  checkboxValue: string;
}

interface DataFields {
  key: string;
  value: { label: string; placeholder: string }
}[]

export const RegistrationAccordion = ({ dataFields, control, value, title, setCheckboxValue, checkboxValue }: RegistrationAccordion) => {

  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="hover:bg-slate-50 rounded-sm h-5 px-1 py-5 my-4 hover:no-underline font-semibold  text-violet-800">
        {title}
      </AccordionTrigger>
      <AccordionContent className="mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4">
          {Object.entries(dataFields as DataFields).map(([key, { label, placeholder }]) => (

            key === 'estadoCivil' ? (
              <RegistrationRadioButton key={key}
                control={control}
                name={key}
                label={label}
                setRadioButtonValue={setCheckboxValue}
                RadioButtonValue={checkboxValue}
              />
            ) : key === 'dataCompra' || key === 'dataNascimento' ? (
              <RegistrationDatePicker key={key}
                control={control}
                name={key}
                label={label}
                placeholder={placeholder}
              />
            ) : (
              <RegistrationInput key={key}
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

