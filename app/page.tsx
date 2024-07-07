import Image from "next/image";
import { ClerkLoaded, ClerkLoading, SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";

import Link from "next/link";

export default function Home() {
  return (
   <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p.4 gap-5">
    <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
           <Image src='./success.svg' fill alt="home image" />
    </div>
     <div className="flex flex-col items-center gap-y-8">
          <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[400px] text-center">
             Learn, Practice and Master by doing with ISRAR
          </h1>
      
      <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
         <ClerkLoading>
            
         </ClerkLoading>
         <ClerkLoaded>
            <SignedOut>
                <SignUpButton mode="modal">
                  <button className="py-2 px-4 bg-primary rounded-lg text-white font-bold hover:bg-primary/80 active:bg-primary/50">
                       Get Started
                    </button>
                </SignUpButton>
                <SignInButton mode="modal">
                  <button className="py-2 px-4 bg-primary rounded-lg text-white font-bold hover:bg-primary/80 active:bg-primary/50">
                       I already have an account!
                    </button>
                </SignInButton>
            </SignedOut>

            <SignedIn>
            <Link href='/quiz' className="font-bold text-white active:text-white/50 active:bg-primary/50">
                   <button className="w-full bg-primary p-2 rounded-lg" >                    
                           Continue Learning                        
                   </button>
                   </Link>

            </SignedIn>
         </ClerkLoaded>
      </div>


     </div>
   </div>
  );
}
