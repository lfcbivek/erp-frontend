declare module 'react-select-country-list' {
  export default function countryList(): {
    getData: () => Array<{ label: string; value: string }>
  }
} 