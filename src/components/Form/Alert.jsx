import { BiSolidCheckboxChecked } from "react-icons/bi";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function AlertDemo() {
  return (
    <div className="flex justify-center items-center  w-full">
      <Alert className=' border-none text-green-500'>
        <BiSolidCheckboxChecked className="h-4 w-4" />
        <AlertTitle>Formulario Enviado!</AlertTitle>
        <AlertDescription>
          Mensaje recibido. Me comunicare contigo pronto.
        </AlertDescription>
      </Alert>
    </div>

  )
}
