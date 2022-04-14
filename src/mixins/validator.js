import
{
    required,
    minLength,
    maxLength,
    email,
    numeric,
    minValue
} from 'vuelidate/lib/validators'

const hes = (value) =>
{
    if (!value) return false
    const pattern = /^[A-Z0-9]{4}-[A-Z0-9]{4}-[0-9]{2}$/;
    return pattern.test(value)
}

const phone = (value) =>
{
    if (!value) return false
    const pattern = /^05[0-9]{2}[0-9]{3}[0-9]{2}[0-9]{2}$/
    return pattern.test(value)
}

const tc = (value) =>
{
    if (!value) return false
    const pattern = /^[1-9]{1}[0-9]{9}[02468]{1}$/
    return pattern.test(value)
}

const letterSpace = (value) => {
    if(!value) return false
    const pattern = /^[a-zA-Z\s]*$/;
    return pattern.test(value)
}

export default {
    validations: {
        guests: {
            $each: {
                name: {
                    required,
                    letterSpace,
                    minLength: minLength(3)
                },
                email: {
                    required,
                    email
                },
                phone: {
                    required,
                    maxLength: maxLength(11),
                    minLength: minLength(11),
                    numeric,
                    phone
                },
                hes: {
                    required,
                    minLength: minLength(12),
                    maxLength: maxLength(12),
                    hes,
                },
                tc: {
                    required,
                    numeric,
                    minLength: minLength(11),
                    maxLength: maxLength(11),
                    tc
                },
                age: {
                    required,
                    minValue: minValue(7),
                    numeric
                }
            }
        }
    },
    computed: {
        nameErrors()
        {
            return (el) =>
            {
                const errors = [];
                
                if (!el.$dirty) return errors
                !el.minLength && errors.push("Name must be at least 3 characters long")
                !el.required && errors.push("Name is required")
                !el.letterSpace && errors.push("Name should only contain letters")
                return errors
            }
        },
        emailErrors()
        {
            return (el) =>
            {
                const errors = []
                if (!el.$dirty) return errors
                !el.email && errors.push("Please enter a valid email")
                !el.required && errors.push("Email is required")
                return errors
            }
        },
        phoneErrors()
        {
            return (el) =>
            {
                const errors = []
                if (!el.$dirty) return errors
                !el.numeric && errors.push("Must be a number")
                !el.minLength && errors.push("Must be 11 characters long")
                !el.required && errors.push("Phone is required")
                !el.phone && errors.push("Please enter a valid phone number")
                return errors
            }
        },
        hesErrors()
        {
            return (el) =>
            {
                const errors = []
                if (!el.$dirty) return errors
                !el.minLength && errors.push("Must be 16 characters long")
                !el.maxLength && errors.push("Must be 16 characters long")
                !el.hes && errors.push("Please enter a valid HES Code")
                !el.required && errors.push("HES Code required")
                return errors
            }
        },
        tcErrors()
        {
            return (el) =>
            {
                const errors = []
                if (!el.$dirty) return errors
                !el.required && errors.push("TC is required")
                !el.minLength && errors.push("Must be 11 characters long")
                !el.maxLength && errors.push("Must be 11 characters long")
                !el.tc && errors.push("Please enter a TC valid")
                return errors
            }
        },
        ageErrors()
        {
            return (el) =>
            {
                const errors = []
                if (!el.$dirty) return errors
                !el.required && errors.push("Age is required")
                !el.minValue && errors.push("Only people older than 6 years old allowed")
                !el.numeric && errors.push("Must be a number")
                return errors
            }
        }
    }
}