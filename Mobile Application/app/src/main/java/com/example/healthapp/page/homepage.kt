package com.example.healthapp.page

import android.annotation.SuppressLint
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.material.Colors
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.livedata.observeAsState
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.sp
import androidx.navigation.NavController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import com.example.healthapp.AuthState
import com.example.healthapp.AuthViewModel
import com.example.healthapp.view.BottomBar
import com.example.healthapp.view.Green
import com.example.healthapp.view.Home
import com.example.healthapp.view.MultiplePhotoPicker
import com.example.healthapp.view.SinglePhotoPicker
import com.example.healthapp.view.SingleVideoPicker

// Define your custom colors

@OptIn(ExperimentalMaterial3Api::class)
@SuppressLint("UnusedMaterial3ScaffoldPaddingParameter")
@Composable
fun HomePage(modifier: Modifier = Modifier, navController: NavController, authViewModel: AuthViewModel) {

    val authState = authViewModel.authState.observeAsState()

    LaunchedEffect(authState.value) {
        when (authState.value) {
            is AuthState.Unauthenticated -> navController.navigate("login")
            else -> Unit
        }
    }

    Column(
        modifier = modifier
            .fillMaxSize()
            .background(Green),
        verticalArrangement = Arrangement.SpaceEvenly,
        horizontalAlignment = Alignment.CenterHorizontally,
    ) {
        Scaffold(
            modifier = Modifier.fillMaxSize(),
            topBar = {TopAppBar(
                title = {
                    Text(
                        text = "AyurHealth",
                        fontWeight = FontWeight.Bold,
                        fontSize = 30.sp,
                        color = Green
                    )
                },
                actions = {
                    TextButton(onClick = { authViewModel.signout() }) {
                        Text(text = "Sign out", color = Green)
                    }
                }
            )

            }
        ) { innerPadding ->
            // Handle padding below the TopAppBar and ensure proper layout
            val navController = rememberNavController()

            NavHost(navController = navController, startDestination = "single") {
                composable("home") {
                    Scaffold(
                        modifier = Modifier.padding(innerPadding), // Ensures padding below the TopAppBar
                        bottomBar = {
                            BottomBar(navController = navController)
                        },
                    ) { contentPadding ->
                        Home()
                    }
                }
                composable("single") {
                    Scaffold(
                        modifier = Modifier.padding(innerPadding),
                        bottomBar = {
                            BottomBar(navController = navController)
                        },
                    ) { contentPadding ->
                        SinglePhotoPicker()
                    }
                }
                composable("multi") {
                    Scaffold(
                        modifier = Modifier.padding(innerPadding),
                        bottomBar = {
                            BottomBar(navController = navController)
                        },
                    ) { contentPadding ->
                        MultiplePhotoPicker()
                    }
                }
                composable("video") {
                    Scaffold(
                        modifier = Modifier.padding(innerPadding),
                        bottomBar = {
                            BottomBar(navController = navController)
                        },
                    ) { contentPadding ->
                        SingleVideoPicker()
                    }
                }
            }
        }
    }
}
