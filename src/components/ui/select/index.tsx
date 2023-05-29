import React from 'react';
import {
  DropdownContainer,
  DropdownList,
  DropdownListItem,
  DropdownTitleContainer,
  DropdownWrapper,
  IconContainer,
  IconValueContainer,
  StyledInput,
  Label,
} from './styled';
import { ISelectProps, Option } from './types';
import { useOutsideClick } from 'src/core/hooks';
import { IconChevron } from '../../icons/iconChevron';
import { useDeviceDetected } from '../../../core/hooks/useDeviceDetected';

export const Select: React.FC<ISelectProps> = ({
  className,
  placeholder,
  label,
  onChange,
  options = [],
  selected,
  name,
  readOnly = true,
  disabled = false,
  showSelectedValueIcon = false,
  showSelectedValue = true,
  defaultValue,
  CustomOptionComponent = undefined,
}) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [selectedValue, setSelectedValue] = React.useState<any>({});

  const isMobile = useDeviceDetected();

  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!selected) return;
    options.map((v) => {
      if (v.value === selected) {
        onChange(v.value);
        setSelectedValue(v);
      }
    });
  }, [selected]);

  const handleChange = (data: Option) => {
    setSelectedValue(data);
    onChange(data.value);
    setOpen(!open);
  };

  useOutsideClick(
    ref,
    () => {
      setOpen(false);
    },
    true,
  );

  return (
    <DropdownWrapper className={className}>
      <DropdownContainer ref={ref} onClick={() => !disabled && setOpen(!open)} className='dropdonwContainer'>
        {label && <Label className='inputLabel'>{label}</Label>}
        <DropdownTitleContainer className='title-container'>
          {selectedValue.icon && showSelectedValueIcon && (
            <IconValueContainer className='icon-value-container'>{selectedValue?.icon}</IconValueContainer>
          )}
          {!isMobile && (
            <StyledInput
              className='input'
              name={name}
              placeholder={placeholder}
              defaultValue={(showSelectedValue && selectedValue.label) || defaultValue}
              readOnly={readOnly}
              disabled={disabled}
              hasLabel={!!label}
              showSelectedValueIcon={showSelectedValueIcon}
            />
          )}

          <IconContainer className='icon-container'>
            <IconChevron style={{ transform: (open && 'rotate(180deg)') || 'rotate(0deg)' }} />
          </IconContainer>
        </DropdownTitleContainer>
        {open && (
          <DropdownList className='dropdownList'>
            {options.map((v) =>
              CustomOptionComponent ? (
                <CustomOptionComponent
                  data={v}
                  className='dropdownItem'
                  key={v.value}
                  selected={selectedValue?.value === v.value}
                  onClick={() => handleChange(v)}
                />
              ) : (
                <DropdownListItem
                  className='dropdownItem'
                  key={v.value}
                  selected={selectedValue?.value === v.value}
                  onClick={() => handleChange(v)}
                >
                  {v.label}
                </DropdownListItem>
              ),
            )}
          </DropdownList>
        )}
      </DropdownContainer>
    </DropdownWrapper>
  );
};
