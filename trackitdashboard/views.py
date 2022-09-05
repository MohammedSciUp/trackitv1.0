from django.shortcuts import render
from django.shortcuts import render, redirect 
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.decorators import login_required



# ..................

# Create your views here.
def loginp(request):
	if request.user.is_authenticated:
		return redirect('sumchecking')
	else:
		if request.method == 'POST':
			username = request.POST.get('username')
			password =request.POST.get('password')

			user = authenticate(request, username=username, password=password)

			if user is not None:
				login(request, user)
				return redirect('sumchecking')
			else:
				messages.info(request, 'Username OR password is incorrect')

		context = {}
		return render(request, 'loginp.html', context)

def logoutUser(request):
	logout(request)
	return redirect('loginp')



@login_required(login_url='/loginp/')
def sumchecking(request):
	return render(request, 'sumchecking.html')

@login_required(login_url='/loginp/')
def IVMS(request):
	return render(request, 'IVMS.html')

@login_required(login_url='/loginp/')
def Map(request):
	return render(request, 'Map.html')

@login_required(login_url='/loginp/')
def Summary(request):
	return render(request, 'Summary.html')

@login_required(login_url='/loginp/')
def page404(request):
	return render(request, '404page.html')

