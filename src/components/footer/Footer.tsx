import { BehanceLogo, GithubLogo, LinkedinLogo} from '@phosphor-icons/react'
import { ReactNode, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function Footer() {

    let data = new Date().getFullYear()

    const { usuario } = useContext(AuthContext)

    let component: ReactNode

    if (usuario.token !== "") {

        component = (

            <div className="flex justify-center bg-purple-400 text-black">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                        Blog Pessoal Izzy Gutier | Copyright: {data}
                    </p>
                    <p className='text-lg'>Conheça os meus Trabalhos:</p>
                    <div className='flex gap-2'>
                        <a href="https://www.linkedin.com/in/izabelly-gutierressilva" target="_blank">
                            <LinkedinLogo size={48} weight='bold' />
                        </a>
                        <a href="https://www.behance.net/izabellygsilva" target="_blank">
                            <BehanceLogo size={48} weight='bold' />
                        </a>
                        <a href="https://github.com/izabellygutierres" target="_blank">
                            <GithubLogo size={48} weight='bold' />
                        </a>
                    </div>
                </div>
            </div>

        )
    }
    return (
        <>
            { component }
        </>
    )
}

export default Footer