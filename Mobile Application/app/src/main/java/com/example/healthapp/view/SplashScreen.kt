package com.example.healthapp.view



import android.annotation.SuppressLint
import android.os.Handler
import android.os.Looper
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.material3.Button
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.painter.Painter
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.navigation.NavController
import androidx.navigation.compose.rememberNavController
import kotlinx.coroutines.delay
import com.example.healthapp.R





import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.size

import androidx.compose.ui.graphics.Color

// Define your custom colors
val Green = Color(0xFF199033)
val White = Color(0x00FFFEFE)

@SuppressLint("UnusedMaterial3ScaffoldPaddingParameter")
@Composable
fun SplashScreen(navController: NavController) {

    LaunchedEffect(key1 = true) {
        // Delay for the splash screen (3 seconds in this case)
        delay(3000)
        // After delay, navigate to the home page or main screen
        navController.navigate("home") {
            // Optional: Pop the splash screen off the stack so user can't go back
            popUpTo("splash") { inclusive = true }
        }
    }

    // Splash screen content
    Box(
        contentAlignment = Alignment.Center,
        modifier = Modifier.fillMaxSize().background(Color.White)
    ) {
        // Load your image resource
        val splashImage: Painter = painterResource(id = R.drawable.ayurlogo) // Replace with your actual logo

        // Display the image
        Image(painter = splashImage, contentDescription = "Splash Logo", modifier = Modifier.size(900.dp))

        // Circular progress indicator with Green color
        CircularProgressIndicator(
            modifier = Modifier.align(Alignment.BottomCenter).padding(bottom = 50.dp),
            color = Green
        )
    }
}

@Composable
@Preview
fun SplashScreenPreview() {
    val navController = rememberNavController()
    SplashScreen(navController = navController)
}
