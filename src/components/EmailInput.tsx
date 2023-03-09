import React, { useEffect, memo } from "react";
import env from "ts-react-dotenv";

// First one to render a user's email:

type EmailInputProps = {
  value: string;
  onChange: (newValue: string) => void;
};

const EmailInput: React.FC<EmailInputProps> = ({ value, onChange }) => {
  useEffect(() => {
    console.log("Email renderiran");
  });
  return (
    <label>
      Your email:
      <input
        type="email"
        value={value}
        style={
          env.ENV === "test"
            ? { backgroundColor: "yellow" }
            : { backgroundColor: "red" }
        }
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
      />
    </label>
  );
};

export default memo(EmailInput);
