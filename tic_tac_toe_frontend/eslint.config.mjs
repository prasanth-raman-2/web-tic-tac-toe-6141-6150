import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { 
    languageOptions: { 
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true }
      },
      globals: {
        document: true,
        window: true,
        test: true,
        expect: true
      }
    },
    rules: {
      // Basic error prevention
      'no-unused-vars': ['error', { varsIgnorePattern: 'React|App' }],
      'no-undef': 'error',
      'no-console': 'warn',
      
      // Code quality
      'prefer-const': 'error',
      'no-var': 'error',
      'eqeqeq': ['error', 'always'],
      
      // React specific
      'react/prop-types': 'warn',
      'react/no-array-index-key': 'warn',
      'react/no-unused-state': 'error',
      'react/self-closing-comp': 'error'
    }
  },
  pluginJs.configs.recommended,
  {
    plugins: { react: pluginReact },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "error"
    }
  }
]
