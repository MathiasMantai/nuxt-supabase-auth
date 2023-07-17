import { Database } from '../../types/supabase'
import { serverSupabaseUser, serverSupabaseClient } from '#supabase/server'

export default defineEventHandler( async (event) => {
    const user = await serverSupabaseUser(event)

    if(!user) {
        throw createError({
            statusCode: 401,
            message: 'Unauthorized User'
        })
    }

    const serverClient = serverSupabaseClient<Database>(event)

    const { data, error } = await serverClient.from('userdata').select().eq('userId', user.id).limit(1)

    return {
        username: data![0]["username"]
    }
})