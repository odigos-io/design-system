import React, { useState, KeyboardEvent } from 'react';
import { Text } from '../text/text';
import theme from '@/styles/palette';
import styled from 'styled-components';
import { Input as BaseInput } from '../input/input';
import { Button as BaseButton } from '../button/button';

interface MultiInputProps {
  initialList?: string[];
  onListChange?: (list: string[]) => void;
  placeholder?: string;
  limit?: number;
}

export const MultiInput: React.FC<MultiInputProps> = ({
  initialList = [],
  onListChange,
  placeholder = 'Add item to list',
}) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [list, setList] = useState<string[]>(initialList);

  const handleInputChange = (e: string) => {
    setInputValue(e);
  };

  const handleAddToList = () => {
    if (inputValue.trim() !== '') {
      const newList = [...list, inputValue];
      setList(newList);
      setInputValue('');
      onListChange && onListChange(newList);
    }
  };

  const handleRemoveFromList = (indexToRemove: number) => {
    const newList = list.filter((_, index) => index !== indexToRemove);
    setList(newList);
    onListChange && onListChange(newList);
  };

  return (
    <Container>
      <ListContainer>
        {list.map((item, index) => (
          <ListItem key={index} onClick={() => handleRemoveFromList(index)}>
            <Text size={12} color={theme.text.dark_button}>
              {item}
            </Text>
            <svg
              width="12"
              height="12"
              viewBox="0 0 16 16"
              fill="#0e1c28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8535 12.146C12.9 12.1925 12.9368 12.2476 12.962 12.3083C12.9871 12.369 13.0001 12.4341 13.0001 12.4998C13.0001 12.5655 12.9871 12.6305 12.962 12.6912C12.9368 12.7519 12.9 12.8071 12.8535 12.8535C12.8071 12.9 12.7519 12.9368 12.6912 12.962C12.6305 12.9871 12.5655 13.0001 12.4998 13.0001C12.4341 13.0001 12.369 12.9871 12.3083 12.962C12.2476 12.9368 12.1925 12.9 12.146 12.8535L7.99979 8.70666L3.85354 12.8535C3.75972 12.9474 3.63247 13.0001 3.49979 13.0001C3.36711 13.0001 3.23986 12.9474 3.14604 12.8535C3.05222 12.7597 2.99951 12.6325 2.99951 12.4998C2.99951 12.3671 3.05222 12.2399 3.14604 12.146L7.29291 7.99979L3.14604 3.85354C3.05222 3.75972 2.99951 3.63247 2.99951 3.49979C2.99951 3.36711 3.05222 3.23986 3.14604 3.14604C3.23986 3.05222 3.36711 2.99951 3.49979 2.99951C3.63247 2.99951 3.75972 3.05222 3.85354 3.14604L7.99979 7.29291L12.146 3.14604C12.2399 3.05222 12.3671 2.99951 12.4998 2.99951C12.6325 2.99951 12.7597 3.05222 12.8535 3.14604C12.9474 3.23986 13.0001 3.36711 13.0001 3.49979C13.0001 3.63247 12.9474 3.75972 12.8535 3.85354L8.70666 7.99979L12.8535 12.146Z"
                fill="#0e1c28"
              />
            </svg>
          </ListItem>
        ))}
      </ListContainer>
      <InputContainer>
        <Input
          style={{ width: '100%' }}
          value={inputValue}
          placeholder={placeholder}
          onChange={(e) => handleInputChange(e)}
        />
        <Button onClick={handleAddToList} style={{ marginLeft: 10 }}>
          <Text size={14} weight={600} color={theme.text.dark_button}>
            Add
          </Text>
        </Button>
      </InputContainer>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  width: 100%;
`;

const ListContainer = styled.div`
  display: flex;
  width: 110%;
  flex-wrap: wrap;
`;

const ListItem = styled.div`
  cursor: pointer;
  padding: 2px 8px;
  margin: 3px;
  border-radius: 5px;
  background: ${theme.colors.light_grey};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  min-height: 30px;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  height: 42px;
`;

const Input = styled(BaseInput)`
  width: 100%;
`;

const Button = styled(BaseButton)`
  margin-left: 10px;
`;
