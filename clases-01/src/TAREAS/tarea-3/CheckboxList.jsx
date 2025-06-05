/*
 * Este componente debe renderizar una lista de componentes UncontrolledCheckbox.
 * Debes completar ese componente antes de completar este.
 * Recibirá una prop: items.
 * items es un objeto de forma { [nombre]: [valorInicial] }, que liste todos los checkboxes por ejemplo:
 * <ControlledCheckboxList items={
 *   uno: false,
 *   dos: true,
 *   tres: false,
 * } />
 * debe renderizar tres checkboxes, con nombres "uno", "dos" y "tres", que inicien con valores false, true y false respectivamente.
 */
import { UncontrolledCheckbox } from './UncontrolledCheckbox'; // Asegúrate de importar correctamente el componente


export function CheckboxList({ items }) {
    return (
        <div className="checkbox-list">
            {Object.keys(items).map((key) => (
                <UncontrolledCheckbox 
                    key={key} 
                    name={key} 
                    initialValue={items[key]} 
                />
            ))}
        </div>
    );
}
