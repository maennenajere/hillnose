import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Quotes() {
    const [quote, setQuote] = useState(null)

    useEffect(() => {
        async function fetchQuote() {
            const { data, error } = await supabase
                .from('quotes')
                .select('quote, date')
                .order('date', { ascending: false })
                .limit(1)
                .single()

            if (error) {
                console.error('Error fetching:', error)
                setQuote({
                    quote: 'Hello traveler!',
                    date: new Date().toISOString(),
                })
            } else {
                setQuote(data)
            }
        }

        fetchQuote()
    }, [])

    if (!quote) {
        return (
            <p className="text-gray-400 italic text-sm">
                “Hello traveler!” <br />
                <span className="text-gray-600 text-xs">
                    {new Date().toLocaleDateString('fi-FI', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                    })}
                </span>
            </p>
        )
    }

    return (
        <p className="text-gray-400 italic text-sm">
            “{quote.quote}” <br />
            <span className="text-gray-600 text-xs">
                {new Date(quote.date).toLocaleDateString('fi-FI', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                })}
            </span>
        </p>
    )
}