

var builder = WebApplication.CreateBuilder(args); //default

builder.Services.AddControllersWithViews(); // usa VC

var app = builder.Build();//default

app.UseRouting(); //usa routing

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}"); // mappatuta routing default

app.MapGet("/", () => "Hello World!"); // aggiunge rotta singola



app.Run(); //default
