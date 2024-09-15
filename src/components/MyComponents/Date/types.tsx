export interface DateProps {
    date: string | Date;
    prefix?: '@' | '*' | 'date' | '' | string; 
    format?: 'yyyy-mm-dd' | 'mm-dd-yyyy' | 'dd-mm-yyyy';
    darkMode?: boolean;
}