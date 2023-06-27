import { format } from 'date-fns'

const formatProjectHeaderDate = ()=>{
    const currentDate = new Date();
    return format(currentDate, "iii dd MMM")
};

export { formatProjectHeaderDate }