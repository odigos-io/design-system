import React, { ChangeEvent, InputHTMLAttributes, useState } from 'react';
import {
  StyledInputContainer,
  StyledInput,
  ErrorWrapper,
  LabelWrapper,
  DisplayIconsWrapper,
} from './input.styled';
import { Text } from '../text/text';
import EyeOpenIcon from '@/assets/icons/eye-open.svg';
import EyeCloseIcon from '@/assets/icons/eye-close.svg';
import { Tooltip } from '../tooltip';
import theme from '@/styles/palette';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string;
  onChange: (value: string) => void;
  error?: string;
  style?: React.CSSProperties;
  tooltip?: string;
}

export function Input({
  label,
  value,
  onChange,
  type = 'text',
  error = '',
  style = {},
  onKeyDown,
  tooltip,
  required,
  autoComplete = "off",
  ...rest
}: InputProps): JSX.Element {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    onChange(event.target.value);
  }

  return (
    <div style={{ ...style }}>
      {label && (
        <LabelWrapper>
          <Tooltip text={tooltip || ''}>
            <div style={{ display: 'flex', gap: 4 }}>
              <Text size={14} weight={600}>
                {label}
              </Text>
              {required && (
                <Text size={14} weight={600}>
                  {'*'}
                </Text>
              )}
            </div>
          </Tooltip>
        </LabelWrapper>
      )}
      <StyledInputContainer
        active={!!value || undefined}
        error={error ? true : undefined}
      >
        <StyledInput
          type={showPassword ? 'text' : type}
          value={value}
          onChange={handleChange}
          autoComplete={autoComplete}
          onKeyDown={onKeyDown}
          {...rest}
        />
        {type === 'password' && (
          <DisplayIconsWrapper onClick={() => setShowPassword(!showPassword)}>
            {!showPassword ? (
              <EyeOpenIcon width={16} height={16} />
            ) : (
              <EyeCloseIcon width={16} height={16} />
            )}
          </DisplayIconsWrapper>
        )}
      </StyledInputContainer>
      {error && (
        <ErrorWrapper>
          <Text size={14} color={'#FD3F3F'}>
            {error}
          </Text>
        </ErrorWrapper>
      )}
    </div>
  );
}
