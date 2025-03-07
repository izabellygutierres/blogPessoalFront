import ListaPostagens from "../../components/postagens/listapostagens/ListaPostagens"
import ModalPostagem from "../../components/postagens/modalpostagem/ModalPostagem"
import blogHome from "img/blogHome.png"

function Home() {
    return (
        <>
            <div className="bg-rose-200 flex justify-center">
                <div className='container grid grid-cols-2 text-black'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Welcome! 
                        </h2>
                        <p className='text-xl'>
                            Ao meu Blog Pessoal! Onde compartilho meus momentos!💜💌
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className="flex justify-around gap-4">
                                <ModalPostagem />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src={blogHome}
                            alt="Imagem Página Home"
                            className='w-4/6'
                        />
                    </div>
                </div>
            </div>

            <ListaPostagens />
        </>
    )
}

export default Home