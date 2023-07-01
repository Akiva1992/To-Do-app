import { format } from 'date-fns'


const formatDrawerCalendarDate = ()=>{
    const currentDate = new Date();
    return format(currentDate, "d")
};

export { formatDrawerCalendarDate }