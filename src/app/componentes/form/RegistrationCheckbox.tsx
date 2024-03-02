import { FormField, FormLabel } from '@/components/ui/form'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import React from 'react'

interface RegistrationCheckboxProps {
  setCheckboxValue: React.Dispatch<React.SetStateAction<string>>;
  checkboxValue: string;
  label: string;
  control: any;
  name: string;
}

export const RegistrationCheckbox = ({ setCheckboxValue, checkboxValue, label, control, name }: RegistrationCheckboxProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="mb-4 mx-2">
          <FormLabel className="block text-gray-700 text-sm font-bold mb-2">{label}</FormLabel>
          <RadioGroup defaultValue="option-one" onValueChange={(value) => {
            setCheckboxValue(value)
            return field.onChange(value)
          }} value={checkboxValue} className='flex'>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="solteiro" id="solteiro" />
              <Label htmlFor="solteiro">Solteiro</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="casado" id="casado" />
              <Label htmlFor="casado">Casado</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="divorciado" id="divorciado" />
              <Label htmlFor="divorciado">Divorciado</Label>
            </div>
          </RadioGroup>
        </div>
      )}
    />

  )
}
