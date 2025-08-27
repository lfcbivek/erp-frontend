import { Atom, Detective, Bank, Briefcase, CaretDown, Aperture} from "@phosphor-icons/react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarHeader
} from "@/components/ui/sidebar"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

// Menu items.
const items = [
  {
    title: "Employees",
    url: "#",
    icon: Detective,
    children: []
  },
  {
    title: "Payroll",
    url: "#",
    icon: Bank,
    children: []
  },
  {
    title: "OnBoarding",
    url: "#",
    icon: Briefcase,
    children: []
  },
  {
    title: "Workflows",
    url: "",
    icon: Atom,
    children: [
      {
        title: "Integrations",
        url: "#",
        icon: <Aperture size={36} color="#32b2c3" weight="fill" />
      },
      {
        title: "Create Workflows",
        url: "/workflows",
        icon: <Aperture size={36} color="#32b2c3" weight="fill" />
      }
    ]
  },
]

export default function AppSidebar() {
  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "15rem",
        "--sidebar-width-mobile": "15rem",
      }}
    >
    <Sidebar
      collapsible="icon"
      className="AppSidebar"
    >
      <SidebarHeader asChild>
        <div className="flex items-center gap-2 px-2">
          <img src="/test.png" alt="Logo" className="w-10 h-10 inline-block align-center" />
          <h1 className="font-semibold text-lg leading-tight">Swata Inc.</h1>
        </div>
      </SidebarHeader>

      <hr />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                if (item.children.length === 0){
                 return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.url}>
                          <item.icon />
                          <span><b>{item.title}</b></span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                
                } else {
                  return(
                    <Collapsible defaultOpen className="group/collapsible">
                      <CollapsibleTrigger>
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton>
                            <item.icon />
                            <span><b>{item.title}</b></span>
                            <CaretDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        {item.children.map(child => (
                          <SidebarMenuSub>
                            <SidebarMenuSubItem key={child.title}>
                              <SidebarMenuSubButton key={child.title} asChild>
                              <a href={child.url}>
                                {child.icon}
                                <span><b>{child.title}</b></span>
                              </a>

                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          </SidebarMenuSub>

                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  )
                }
              
              
              }
                
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
    </SidebarProvider>
  )
}