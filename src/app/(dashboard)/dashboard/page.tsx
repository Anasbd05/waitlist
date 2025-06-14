import {generated_ads} from "@/assets/assets";
import {createClient} from "@/utils/supabase/server";
import Image from "next/image";
import {redirect} from "next/navigation";

export default async function GeneratedAds() {


  const supabase = await createClient()
  const {data: {user}} = await supabase.auth.getUser()

  if(!user) {
    redirect('/login')
  }

  return (
    <section className='mt-10 w-[99%] mx-auto'>
      <h1 className='text-3xl font-semibold mb-6'>My Ads</h1>
      <main className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
        {generated_ads.map((ad) => (
          <div key={ad.id} className="rounded-md border p-2 flex flex-col" >
            <Image src={ad.image} className="rounded-md w-[380px] h-[250px] " alt={ad.alt} width={375} height={440} />
            <div className="flex mt-2.5 flex-col">
              <h2 className="font-semibold mb-0.5 font-header">{ad.title}</h2>
              <p className="text-muted-foreground text-xs">{ad.desc}</p>
            </div>
          </div>
        ))}
      </main>
    </section>
  )
}
