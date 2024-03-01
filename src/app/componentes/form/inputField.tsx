import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export interface InputFieldProps {
    control: any,
    name: string,
    label: string,
    placeholder: string
}

const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const InputField = ({ control, name, label, placeholder }: InputFieldProps) => {

    const capitalizedLabel = capitalizeFirstLetter(label);

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className="flex flex-col">
                    <FormLabel className="text-gray-600">{capitalizedLabel}</FormLabel>
                    <FormControl className="mt-1 relative rounded-md shadow-sm">
                        <Input
                            placeholder={"Digite seu" + placeholder}
                            type="text"
                            {...field}
                            className="block w-full pr-10 border-gray-300 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 rounded-md"
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default InputField;
